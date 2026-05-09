"use client"
import StatsGrid from "@/components/dashboard/stats-grid"
import ProgressChart from "@/components/dashboard/progress-chart"
import ActivityFeed from "@/components/dashboard/activity-feed"
import QuickActions from "@/components/dashboard/quick-actions"
import { AnimatedPage } from "@/components/common/animated"

export default function DashboardPage() {
  return (
    <AnimatedPage>
      <StatsGrid />
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProgressChart />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>
      <div className="mt-6">
        <ActivityFeed />
      </div>
    </AnimatedPage>
  )
}
