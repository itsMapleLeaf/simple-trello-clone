import * as crypto from 'crypto'

function randomBytes(num: number) {
  return new Promise<Buffer>((resolve, reject) => {
    crypto.randomBytes(num, (error, buffer) => {
      error ? reject(error) : resolve(buffer)
    })
  })
}

export async function generateRandomId() {
  const buffer = await randomBytes(8)
  return buffer.toString('hex')
}
