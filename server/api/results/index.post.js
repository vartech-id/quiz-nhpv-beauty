export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const result = await prisma.result.create({
    data: {
        answer: body.answer
    }
  })
  return {
    message: "jawaban berhasil disimpan",
    data: result
  }
});
