"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Heart, Eye, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "register">("login")

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Анаїс Ісан</h1>
          <nav className="space-x-6">
            <Link href="#about" className="hover:text-purple-200 transition-colors">
              Про автора
            </Link>
            <Link href="#course" className="hover:text-purple-200 transition-colors">
              Курс
            </Link>
            <Link href="#contact" className="hover:text-purple-200 transition-colors">
              Контакти
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-purple-600/30"></div>
        <Image src="/images/hero-bg.png" alt="Meditation background" fill className="object-cover" priority />
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-purple-300" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
              Тренувальний проект пробудження
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Поступова, відповідальна і глибока практика, яка принесе зміни у ваше життя
            </p>
          </div>

          <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Почати подорож
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-purple-800">
                  {authMode === "login" ? "Вхід до курсу" : "Реєстрація"}
                </DialogTitle>
              </DialogHeader>
              <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as "login" | "register")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Вхід</TabsTrigger>
                  <TabsTrigger value="register">Реєстрація</TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ваш@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Пароль</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Увійти</Button>
                </TabsContent>
                <TabsContent value="register" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Повне ім'я</Label>
                    <Input id="name" placeholder="Ваше ім'я" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-email">Email</Label>
                    <Input id="reg-email" type="email" placeholder="ваш@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-password">Пароль</Label>
                    <Input id="reg-password" type="password" />
                  </div>
                  <Link href="/payment">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Зареєструватися та оплатити</Button>
                  </Link>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* About Author Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Про автора курсу</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-200 to-purple-400 rounded-full flex items-center justify-center">
                  <Heart className="w-24 h-24 text-purple-700" />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-purple-800">Анаїс Ісан</h3>
                <p className="text-gray-700 leading-relaxed">
                  Досвідчений практик і наставник у сфері духовного розвитку та пробудження свідомості. Більше 10 років
                  досвіду в роботі з енергетичними практиками, медитацією та трансформаційними техніками.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Створила унікальну методику поступового пробудження, яка допомагає людям знайти свою справжню сутність
                  та розкрити внутрішній потенціал через усвідомлену практику та глибоку внутрішню роботу.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-gray-600">10+ років досвіду</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-gray-600">1000+ учнів</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Banner */}
      <section id="course" className="py-20 bg-gradient-to-r from-purple-800 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-16 h-16 text-purple-200" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Тренувальний проект пробудження</h2>
              <p className="text-xl mb-8 leading-relaxed">
                25 уроків для глибокої трансформації та пробудження вашої справжньої сутності
              </p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-800 hover:bg-purple-50 px-12 py-4 text-lg font-semibold rounded-full"
                >
                  Почати навчання
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-purple-800">Доступ до курсу</DialogTitle>
                </DialogHeader>
                <div className="text-center py-6">
                  <p className="text-gray-600 mb-4">
                    Для доступу до курсу необхідно зареєструватися та оплатити навчання
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setIsAuthOpen(true)}>
                    Зареєструватися
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Зв'язатися з нами</h2>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Ім'я</Label>
                      <Input id="contact-name" placeholder="Ваше ім'я" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" placeholder="ваш@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема</Label>
                    <Input id="subject" placeholder="Тема повідомлення" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Повідомлення</Label>
                    <Textarea id="message" placeholder="Ваше повідомлення..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    Надіслати повідомлення
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Анаїс Ісан</h3>
              <p className="text-purple-200">Тренувальний проект пробудження - ваш шлях до справжнього себе</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навігація</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    Про автора
                  </Link>
                </li>
                <li>
                  <Link href="#course" className="hover:text-white transition-colors">
                    Курс
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Контакти
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакти</h4>
              <div className="text-purple-200 space-y-2">
                <p>Email: info@anaisisan.com</p>
                <p>Підтримка: support@anaisisan.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-200">
            <p>&copy; 2024 Анаїс Ісан. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
