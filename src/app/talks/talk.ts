import {Speaker} from './speaker';

export interface Talk {
  id: number;
  name: string;
  speakers?: Speaker[];
}
