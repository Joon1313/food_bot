import dotenv from 'dotenv';
dotenv.config();

export const headers = {
  origin: 'https://www.instagram.com',
  referer: 'https://www.instagram.com/',
  'user-agent': process.env.USER_AGENT,
  'x-asbd-id': process.env.ASBD,
  'x-csrftoken': process.env.CSRF_TOKEN,
  'x-ig-app-id': process.env.APP_ID,
  'x-ig-www-claim': process.env.WWW_CLAIM,
}