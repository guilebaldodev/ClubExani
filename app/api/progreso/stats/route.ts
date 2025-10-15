import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

// import dbConnect from "@/lib/dbConnect";
import Progreso from "@/models/Progreso";
import { connectDB } from "@/app/utils/mongoose";

export async function GET() {
  await connectDB();
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const statsAgg = await Progreso.aggregate([
      { $match: { clerkId: userId } }, 
      {
        $group: {
          _id: null,
          totalSimulations: { $sum: 1 },
          totalScore: { $sum: "$score" },
          totalPossible: { $sum: "$totalScore" },
          totalTime: { $sum: "$time" },
        },
      },
    ]);

    let stats = statsAgg[0] || {
      totalSimulations: 0,
      totalScore: 0,
      totalPossible: 0,
      totalTime: 0,
    };

    stats = {
      ...stats,
      average:
        stats.totalPossible > 0
          ? (stats.totalScore / stats.totalPossible) * 100
          : 0,
    };

    const lastProgress = await Progreso.find({ clerkId: userId })
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("simulatorId", "titulo imagen _id ")
      .select("_id simulatorId score totalScore time");

    return NextResponse.json({ stats, lastProgress });
  } catch (err) {
    console.error("Error fetching dashboard data:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
