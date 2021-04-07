const KasaControl = require('kasa_control')
const kasa = new KasaControl()

const { KASA_EMAIL, KASA_PASSWORD } = process.env

const main = async () => {
  await kasa.login(KASA_EMAIL, KASA_PASSWORD)
  const devices = await kasa.getDevices()
  console.log(devices)
}
main()