'use client'
import { useState } from 'react';
import ProfileCard from '@/components/profile/profilecard';
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 5 },
  { month: "February", desktop: 6 },
  { month: "March", desktop: 7 },
  { month: "April", desktop: 8 },
  { month: "May", desktop: 9 },
  { month: "June", desktop: 10 },
  { month: "July", desktop: 11 },
  { month: "August", desktop: 12 },
  { month: "September", desktop: 13 },
  { month: "October", desktop: 14 },
  { month: "November", desktop: 15 },
  { month: "December", desktop: 16 },
]

const chartConfig = {
  desktop: {
    label: "Прочитанные книги",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'erasyl b',
    avatarUrl: 'https://rizz.kz',
  });

  const handleProfileChange = (name: string, avatarUrl: string) => {
    setProfile({ name, avatarUrl });
  };

  return (
    <div className="flex items-start justify-start h-screen bg-gray-100 p-6 text-black">
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
        <ProfileCard
          name={profile.name}
          avatarUrl={profile.avatarUrl}
          onProfileChange={handleProfileChange}
        />
      </div>
      <div className="flex-grow p-6 ml-6 bg-white rounded-lg shadow-md">
        <Card>
          <CardHeader>
            <CardTitle>Ваша статистика: </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-6">
              <div className="w-96 h-72">
                <ChartContainer config={chartConfig}>
                  <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  </BarChart>
                </ChartContainer>
              </div>

              {/* Блок с достижениями */}
              <div className="flex flex-col items-center justify-center p-4 bg-gray-200 border-2 border-gray-300 rounded-lg shadow-lg ml-24">
                <img
                  src="https://example.com/achievement-image.png"
                  alt="Достижение"
                  className="w-24 h-24 mb-4 rounded-full"
                />
                <p className="text-lg font-semibold">Ваши достижения</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
