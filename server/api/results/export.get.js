import * as XLSX from "xlsx";

function formatToWIB(date) {
  return new Intl.DateTimeFormat("id-ID", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date(date));
}

const answerLabels = {
  LEARNING_TO_LOVE: "Learning to Love",
  TAKING_THE_STEP: "Taking the Step",
  LOVE_AND_GUARDED: "Love and Guarded",
};

export default defineEventHandler(async (event) => {
  const results = await prisma.result.findMany({
    orderBy: {
      id: "asc",
    },
  });

  const rows = results.map((result, index) => ({
    No: index + 1,
    Answer: answerLabels[result.answer] ?? result.answer,
    "Waktu (WIB)": formatToWIB(result.createdAt) + " " + "WIB",
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);

  worksheet["!cols"] = [
    { wch: 8 },
    { wch: 25 },
    { wch: 25 },
  ];

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Quiz Results"
  );

  const buffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "buffer",
  });

  setResponseHeaders(event, {
    "Content-Type":
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "Content-Disposition":
      'attachment; filename="quiz-results.xlsx"',
  });

  return buffer;
});