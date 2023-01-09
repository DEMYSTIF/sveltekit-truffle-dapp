import { mycontract, web3 } from '$lib/instance';

export const actions = {
    default: async ({ request }) => {
        let inputData = await request.formData();
        let payload = Object.fromEntries(inputData);
        // console.log(payload)
        let result = await mycontract.methods.certificateDetails(payload.fetchID).call();
        // console.log(result)
        let docUrl = web3.utils.hexToAscii(result.document);
        // console.log(docUrl)
        result.document = docUrl;
        // console.log(result)
        return {
            success: true,
            result: JSON.stringify(result)
        }
    }
};