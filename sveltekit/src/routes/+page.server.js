import { account, mycontract, web3 } from '$lib/instance';

export const actions = {
    default: async ({ request }) => {
        let inputData = await request.formData();
        let payload = Object.fromEntries(inputData);
        // console.log(payload)
        let docHex = web3.utils.asciiToHex(payload.cid);
        // console.log(docHex)
        let trx = await mycontract.methods.newCertificate(payload.certID, payload.course, payload.name, payload.grade, payload.date, docHex).send({ from: account, gasLimit: 200000 });
        // .estimateGas({ from: account })
        // console.log(trx)
        return {
            success: true,
            trxHash: trx.transactionHash
        }
    }
};