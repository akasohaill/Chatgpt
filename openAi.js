const {Configuration , OpenAIApi}=require('openai')
const configuration=new Configuration({apikey:"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"});
const openai=new OpenAIApi(configuration);


export async function sendMsgToOpenAI(message){
    const res=await openai.createCompletion({
        model:"gpt-3.5-turbo-instruct",
        prompt:message,
        temperature:0.7,
        max_tokens:256,
        top_p:1,
        frequency_penalty:0,
        presence_penalty:0
    });
    return res.data.choices[0].text;
}

// const OpenAI = require('openai');

// const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });

// export async function sendMsgToOpenAI(message) {
//     const res = await openai.completions.create({
//         model: 'gpt-3.5-turbo-instruct',
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0
//     });
//     return res.data.choices[0].text;
// }


// const { default: OpenAI } = require('openai');

// // Instantiate the OpenAI object with your API key
// const openai = new OpenAI({apikey:"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"});

// // Export async function to send message to OpenAI
// export async function sendMsgToOpenAI(message) {
//   try {
//     const res = await openai.complete({
//       engine: "text-davinci-003",
//       prompt: message,
//       temperature: 0.7,
//       max_tokens: 256,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0
//     });
    
//     // Return the generated text from OpenAI's response
//     return res.choices[0].text;
//   } catch (error) {
//     console.error("Error sending message to OpenAI:", error);
//     throw error; // Rethrow the error for handling elsewhere if needed
//   }
// }


