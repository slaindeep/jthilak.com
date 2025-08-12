<?php
/**
 * TFF Legal Contact Form Configuration
 * 
 * SECURITY NOTE: This file contains sensitive email credentials.
 * Ensure this file is NOT accessible via web browser.
 * Consider placing it outside the public web directory.
 */

// Email Configuration for Office365
define('EMAIL_HOST', 'smtp-mail.outlook.com');
define('EMAIL_PORT', 587);
define('EMAIL_USER', 'info@jthilak.com');
define('EMAIL_PASS', 'Enq@fons2@5'); // CHANGE THIS
define('EMAIL_FROM', 'info@jthilak.com');
define('EMAIL_TO', 'info@jthilak.com');
define('EMAIL_FROM_NAME', 'TFF Legal Website');

// Security Settings
define('ALLOWED_ORIGINS', [
    'https://jthilak.com',
    'https://www.jthilak.com',
    'http://localhost:3000' // Remove in production
]);

// Form Settings
define('MAX_MESSAGE_LENGTH', 5000);
define('ENABLE_LOGGING', true);
define('LOG_FILE', __DIR__ . '/contact_submissions.log');

// Timezone
date_default_timezone_set('Asia/Dubai');

?>