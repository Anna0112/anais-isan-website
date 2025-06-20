"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate login - replace with real authentication
    if (email === "admin@anaisisan.com" && password === "admin123") {
      // Set admin session/token here
      localStorage.setItem("adminToken", "admin-authenticated")
      router.push("/admin")
    } else {
      setError("Невірний email або пароль")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <CardTitle className="text-2xl text-purple-800">Адмін-панель</CardTitle>
          <CardDescription>Увійдіть для управління курсом "Тренувальний проект пробудження"</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email адміністратора</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@anaisisan.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введіть пароль"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>

            {error && <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">{error}</div>}

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
              {isLoading ? "Вхід..." : "Увійти в адмін-панель"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-md">
              <strong>Тестові дані для входу:</strong>
              <br />
              Email: admin@anaisisan.com
              <br />
              Пароль: admin123
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
