'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Image, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Sales",
    value: "$12,345",
    icon: DollarSign,
    change: "+12%",
  },
  {
    title: "Artworks",
    value: "23",
    icon: Image,
    change: "+3",
  },
  {
    title: "Followers",
    value: "1,234",
    icon: Users,
    change: "+123",
  },
  {
    title: "Views",
    value: "45.6K",
    icon: TrendingUp,
    change: "+22%",
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}