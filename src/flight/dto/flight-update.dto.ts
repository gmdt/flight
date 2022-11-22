import { FlightBaseDTO } from './flight-base.dto';

export class FlightUpdateDto extends FlightBaseDTO {
  completedAt: Date;
}
