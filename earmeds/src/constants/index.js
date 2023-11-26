export const apiKey = 'place your openAI api key here';
// in some cases your api key maybe already expired
// try to use a new account to create an api key

export const dummyMessages = [
    {
        role: 'user', 
        content: 'Nasılsın?'
    },
    {
        role: 'assistant',
        content: "İyiyim, size bugün nasıl yardımcı olabilirim?"
    },
    {
        role: 'user',
        content: 'Bir köpeğin bir kedi ile oynadığı bir resim oluşturabilir misin?'
    },
    {
        role: 'assistant',
        content: 'https://storage.googleapis.com/pai-images/ae74b3002bfe4b538493ca7aedb6a300.jpeg'
    }
]
