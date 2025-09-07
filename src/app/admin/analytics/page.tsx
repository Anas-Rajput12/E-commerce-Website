"use client";

import React, { useEffect, useState } from "react";
import { Card, Statistic, Row, Col, Table, message, Button } from "antd";
import { createClient } from "next-sanity";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-01-20",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
});

const AdminAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  type Order = {
    _id: string;
    customerName: string;
    orderDate: string;
    status: string;
    totalAmount: number;
  };
  
  const [ordersSummary, setOrdersSummary] = useState<Order[]>([]);
  const [usersCount, setUsersCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchAnalyticsData();
    fetchOrdersSummary();
    fetchUserCount();
  }, []);

  const handleLogin = () => {
    if (email === "admin@example.com" && password === "admin123") {
      setIsAuthenticated(true);
    } else {
      message.error("Invalid email or password!");
    }
  };

  const fetchAnalyticsData = async () => {
    setLoading(true);
    try {
      const query = `*[_type == "analytics"]`;
      const data = await client.fetch(query);
      setAnalyticsData(data);
    } catch (error) {
      message.error("Failed to fetch analytics data.");
    } finally {
      setLoading(false);
    }
  };

  const fetchOrdersSummary = async () => {
    try {
      const query = `*[_type == "order"] | order(orderDate desc)[0..4]`;
      const data = await client.fetch(query);
      setOrdersSummary(data);
    } catch (error) {
      message.error("Failed to fetch recent orders.");
    }
  };

  const fetchUserCount = async () => {
    try {
      const query = `count(*[_type == "user"])`;
      const count = await client.fetch(query);
      setUsersCount(count);
    } catch (error) {
      message.error("Failed to fetch user count.");
    }
  };

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
  ];

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="p-6 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <Button type="primary" block onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Admin Analytics</h1>
      <Row gutter={16} className="mb-6">
        <Col span={8}>
          <Card>
            <Statistic title="Total Users" value={usersCount} loading={loading} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Orders Processed" value={ordersSummary.length} loading={loading} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Revenue (Last 5 Orders)"
              value={ordersSummary.reduce((sum, order) => sum + order.totalAmount, 0)}
              prefix="$"
              loading={loading}
            />
          </Card>
        </Col>
      </Row>
      <Card className="mb-6">
        <h2 className="mb-4">Recent Orders</h2>
        <Table columns={columns} dataSource={ordersSummary} rowKey="_id" loading={loading} />
      </Card>
      <Card>
        <h2 className="mb-4">Revenue Over Time</h2>
        <LineChart
          width={800}
          height={400}
          data={analyticsData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </Card>
    </div>
  );
};

export default AdminAnalytics;
