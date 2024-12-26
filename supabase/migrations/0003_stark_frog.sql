/*
  # Add test user and authentication policies

  1. Changes
    - Add SQL function to create test user
    - Add authentication policies
*/

-- Function to create test user if it doesn't exist
CREATE OR REPLACE FUNCTION create_test_user()
RETURNS void AS $$
BEGIN
  -- Check if the user already exists
  IF NOT EXISTS (
    SELECT 1 FROM auth.users 
    WHERE email = 'test@example.com'
  ) THEN
    -- Insert test user with password 'password123'
    INSERT INTO auth.users (
      email,
      encrypted_password,
      email_confirmed_at,
      confirmation_sent_at
    )
    VALUES (
      'test@example.com',
      crypt('password123', gen_salt('bf')),
      NOW(),
      NOW()
    );
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;