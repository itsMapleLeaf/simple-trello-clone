import * as crypto from 'crypto'

export function generateRandomId() {
  return crypto.randomBytes(8).toString('hex')
}
