export default defineEventHandler(async () => {
    const results = await prisma.result.findMany({
        orderBy: {
            id: 'asc'
        }
    })

    return results
})