import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Admin } from 'src/admin/entities/admin.entity';

@Injectable()
export class CheckJwtStrategy extends PassportStrategy(Strategy, 'check-jwt') {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_ADMIN_EXPIRE_TIM'),
    });
  }

  async validate(payload: Admin) {
    return {
      id: payload.id,
      name: payload.name,
      email: payload.email,
    };
  }
}