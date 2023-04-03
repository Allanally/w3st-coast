export default defineEventHandler(async (event) => {

   // const { name } = useQuery(event)

    //const { age} = await useBody(event)
    const { data } = await $fetch('https://api.currencyapi.com/v3/historical?apikey=YOUR-APIKEY&base_currency=USD&date=2020-10-01')
    return data
})

