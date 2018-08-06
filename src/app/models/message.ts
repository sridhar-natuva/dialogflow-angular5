export class Message {
  content: string;
  timestamp: Date;
  avatar: string;
  role: string;

  constructor(content: string, avatar: string, timestamp: Date, role: string){
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
    this.role = role;
  }
}
