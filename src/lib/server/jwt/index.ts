import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

interface AccessTokenPayload {
    name: string;
}

export function createAccessToken(payload: AccessTokenPayload) {
    return jwt.sign(
        {
           name: payload.name,
        },
        JWT_SECRET,
        {
            expiresIn: '2m',
        },
    );
}

export function verifyAccessToken(token: string) {
    const payload = jwt.verify(token, JWT_SECRET);

    return payload as AccessTokenPayload;
}