import bcrypt from "bcrypt";

export default async function encryptoKey(password: String): Promise<string> {
  const salt: string = await bcrypt.genSalt(10);
  const passwordHashed: string = await bcrypt.hash(password, salt);
  return passwordHashed;
}

export async function comparePassword(password: string,hash:string): Promise<boolean> {
 const compared: boolean = await bcrypt.compare(password,hash);
  return compared;
}
