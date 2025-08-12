<?php
/**
 * TFF Legal Contact Form Handler
 * Professional email contact form with Office365 SMTP integration
 */

// Start output buffering to capture any output
ob_start();

// Enable error reporting for debugging (remove in production)
ini_set('display_errors', 0); // Don't display errors directly
ini_set('log_errors', 1);
error_reporting(E_ALL);

// Custom error handler to capture errors
set_error_handler(function($severity, $message, $file, $line) {
    throw new ErrorException($message, 0, $severity, $file, $line);
});

// Security Headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Restrict this to your domain in production
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Include configuration
require_once __DIR__ . '/config.php';

// Include PHPMailer - check if files exist first
$phpmailerPath = __DIR__ . '/PHPMailer/';
if (!file_exists($phpmailerPath . 'PHPMailer.php')) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Email service configuration error']);
    exit;
}

require_once $phpmailerPath . 'Exception.php';
require_once $phpmailerPath . 'PHPMailer.php';
require_once $phpmailerPath . 'SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

try {
    // Get and validate input
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        throw new Exception('Invalid JSON input');
    }
    
    // Extract form data
    $name = trim($input['name'] ?? '');
    $email = trim($input['email'] ?? '');
    $company = trim($input['company'] ?? '');
    $phone = trim($input['phone'] ?? '');
    $subject = trim($input['subject'] ?? '');
    $message = trim($input['message'] ?? '');
    
    // Validation
    $errors = [];
    
    if (empty($name)) $errors[] = 'Name is required';
    if (empty($email)) $errors[] = 'Email is required';
    if (empty($subject)) $errors[] = 'Subject is required';
    if (empty($message)) $errors[] = 'Message is required';
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email address';
    }
    
    if (strlen($message) > MAX_MESSAGE_LENGTH) {
        $errors[] = 'Message is too long';
    }
    
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
        exit;
    }
    
    // Sanitize input
    $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $company = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
    $phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
    $subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    
    // Log submission (if enabled)
    if (ENABLE_LOGGING) {
        $logData = [
            'timestamp' => date('Y-m-d H:i:s T'),
            'name' => $name,
            'email' => $email,
            'subject' => $subject,
            'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
        ];
        file_put_contents(LOG_FILE, json_encode($logData) . "\n", FILE_APPEND | LOCK_EX);
    }
    
    // Create PHPMailer instance
    $mail = new PHPMailer(true);
    
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = EMAIL_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = EMAIL_USER;
    $mail->Password = EMAIL_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = EMAIL_PORT;
    
    // Sender and recipient
    $mail->setFrom(EMAIL_FROM, EMAIL_FROM_NAME);
    $mail->addAddress(EMAIL_TO, 'TFF Legal');
    $mail->addReplyTo($email, $name);
    
    // Email content
    $mail->isHTML(true);
    $mail->Subject = "New Contact: $subject - $name";
    
    // Professional HTML email template
    $emailHTML = generateEmailHTML($name, $email, $company, $phone, $subject, $message);
    $mail->Body = $emailHTML;
    
    // Plain text alternative
    $mail->AltBody = generatePlainText($name, $email, $company, $phone, $subject, $message);
    
    // Send email
    $mail->send();
    
    // Clean output buffer and send success response
    ob_clean();
    echo json_encode([
        'success' => true,
        'message' => 'Your message has been sent successfully. We will get back to you within 24 hours.',
        'submissionId' => uniqid('tff_', true)
    ]);
    
} catch (Exception $e) {
    // Clean output buffer
    ob_clean();
    
    // Log error with more details
    error_log("Contact form error: " . $e->getMessage() . " in " . $e->getFile() . " on line " . $e->getLine());
    
    // Return error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'There was an error sending your message. Please try again or contact us directly.',
        'debug' => [
            'error' => $e->getMessage(),
            'file' => basename($e->getFile()),
            'line' => $e->getLine()
        ]
    ]);
} finally {
    // Ensure output buffer is ended
    if (ob_get_level()) {
        ob_end_flush();
    }
}

/**
 * Generate professional HTML email template
 */
function generateEmailHTML($name, $email, $company, $phone, $subject, $message) {
    $currentTime = date('l, F j, Y \a\t g:i A T');
    $phoneLink = !empty($phone) ? 'https://wa.me/' . preg_replace('/[^0-9]/', '', $phone) : '';
    
    return "
    <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;\">
        <div style=\"background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);\">
            <div style=\"border-bottom: 3px solid #0f766e; padding-bottom: 20px; margin-bottom: 30px;\">
                <h1 style=\"color: #0f766e; margin: 0; font-size: 24px;\">New Contact Form Submission</h1>
                <p style=\"color: #6b7280; margin: 5px 0 0 0; font-size: 14px;\">TFF Legal Website - jthilak.com</p>
            </div>
            
            <div style=\"margin-bottom: 20px;\">
                <h2 style=\"color: #374151; font-size: 18px; margin: 0 0 15px 0;\">Contact Information</h2>
                <table style=\"width: 100%; border-collapse: collapse;\">
                    <tr>
                        <td style=\"padding: 8px 0; font-weight: bold; color: #4b5563; width: 120px;\">Name:</td>
                        <td style=\"padding: 8px 0; color: #111827;\">$name</td>
                    </tr>
                    <tr>
                        <td style=\"padding: 8px 0; font-weight: bold; color: #4b5563;\">Email:</td>
                        <td style=\"padding: 8px 0; color: #111827;\">
                            <a href=\"mailto:$email\" style=\"color: #0f766e; text-decoration: none;\">$email</a>
                        </td>
                    </tr>" .
                    (!empty($company) ? "
                    <tr>
                        <td style=\"padding: 8px 0; font-weight: bold; color: #4b5563;\">Company:</td>
                        <td style=\"padding: 8px 0; color: #111827;\">$company</td>
                    </tr>" : "") .
                    (!empty($phone) ? "
                    <tr>
                        <td style=\"padding: 8px 0; font-weight: bold; color: #4b5563;\">Phone:</td>
                        <td style=\"padding: 8px 0; color: #111827;\">
                            <a href=\"$phoneLink\" style=\"color: #0f766e; text-decoration: none;\">$phone</a>
                        </td>
                    </tr>" : "") . "
                    <tr>
                        <td style=\"padding: 8px 0; font-weight: bold; color: #4b5563;\">Subject:</td>
                        <td style=\"padding: 8px 0; color: #111827;\">$subject</td>
                    </tr>
                </table>
            </div>
            
            <div style=\"margin-bottom: 20px;\">
                <h2 style=\"color: #374151; font-size: 18px; margin: 0 0 15px 0;\">Message</h2>
                <div style=\"background-color: #f3f4f6; padding: 20px; border-radius: 6px; border-left: 4px solid #0f766e;\">
                    <p style=\"margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;\">$message</p>
                </div>
            </div>
            
            <div style=\"border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;\">
                <p style=\"color: #6b7280; font-size: 12px; margin: 0; text-align: center;\">
                    This email was sent from the TFF Legal contact form on jthilak.com<br>
                    Time: $currentTime
                </p>
            </div>
        </div>
    </div>";
}

/**
 * Generate plain text version
 */
function generatePlainText($name, $email, $company, $phone, $subject, $message) {
    $currentTime = date('l, F j, Y \a\t g:i A T');
    
    return "New Contact Form Submission from TFF Legal Website

Name: $name
Email: $email" .
(!empty($company) ? "\nCompany: $company" : "") .
(!empty($phone) ? "\nPhone: $phone" : "") . "
Subject: $subject

Message:
$message

Sent at: $currentTime";
}

?>