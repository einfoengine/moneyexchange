import { serialize } from 'cookie';

export function clearTokenCookie(res) {
    const cookie = serialize('token', '', {
      maxAge: -1, // Set maxAge to a negative value to expire the cookie immediately
      path: '/',
    });
  
    res.setHeader('Set-Cookie', cookie);
}