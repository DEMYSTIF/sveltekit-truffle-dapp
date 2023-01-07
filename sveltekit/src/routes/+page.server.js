// console.log("Hi, I'm the server")
import { mycontract, account } from '$lib/instance';

export const actions = {
    default: async ({ request }) => {
        let inputData = await request.formData()
        let payload = Object.fromEntries(inputData)
        console.log(payload)
        let trx = await mycontract.methods.newCertificate(payload.certID, payload.course, payload.name, payload.grade, payload.date).send({ from: account, gasLimit: 987000 })
        console.log(trx)
        return {
            success: true,
            trxHash: trx.transactionHash
        }
    }
};