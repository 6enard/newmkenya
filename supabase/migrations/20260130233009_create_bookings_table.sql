/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text) - Client name
      - `email` (text) - Client email
      - `phone` (text) - Client phone number
      - `service` (text) - Service they want to book
      - `message` (text) - Additional message/details
      - `preferred_date` (date) - Preferred booking date
      - `status` (text) - Booking status (pending, confirmed, cancelled)
      - `created_at` (timestamptz) - When booking was created
      
  2. Security
    - Enable RLS on `bookings` table
    - Add policy for anyone to create bookings (public form submission)
    - Add policy for authenticated users to read all bookings (studio staff)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text DEFAULT '',
  preferred_date date NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);