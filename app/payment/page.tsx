"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Banknote, DollarSign, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to course page
      window.location.href = "/course"
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Повернутися на головну
          </Link>
          <h1 className="text-3xl font-bold text-purple-800 mb-2">Оплата курсу</h1>
          <p className="text-gray-600">Тренувальний проект пробудження</p>
        </div>

        <div className="grid gap-8">
          {/* Course Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-purple-800">Деталі курсу</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Тренувальний проект пробудження</span>
                  <span className="font-semibold">25 уроків</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Доступ до всіх матеріалів</span>
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Сертифікат по завершенню</span>
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Підтримка автора</span>
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <Separator />
                <div className="flex justify-between items-center text-lg font-bold text-purple-800">
                  <span>Загальна вартість:</span>
                  <span>$197</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="text-purple-800">Спосіб оплати</CardTitle>
              <CardDescription>Оберіть зручний для вас спосіб оплати</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-purple-50 transition-colors">
                  <RadioGroupItem value="card" id="card" />
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  <Label htmlFor="card" className="flex-1 cursor-pointer">
                    Банківська картка
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-purple-50 transition-colors">
                  <RadioGroupItem value="transfer" id="transfer" />
                  <Banknote className="w-5 h-5 text-purple-600" />
                  <Label htmlFor="transfer" className="flex-1 cursor-pointer">
                    Банківський переказ
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-purple-50 transition-colors">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <DollarSign className="w-5 h-5 text-purple-600" />
                  <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                    PayPal
                  </Label>
                </div>
              </RadioGroup>

              {/* Payment Forms */}
              <div className="mt-8">
                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Номер картки</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Термін дії</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardholder">Ім'я власника картки</Label>
                      <Input id="cardholder" placeholder="Ваше ім'я" />
                    </div>
                  </div>
                )}

                {paymentMethod === "transfer" && (
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Реквізити для переказу:</h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <strong>Банк:</strong> ПриватБанк
                        </p>
                        <p>
                          <strong>Номер картки:</strong> 5168 7422 1234 5678
                        </p>
                        <p>
                          <strong>Отримувач:</strong> Анаїс Ісан
                        </p>
                        <p>
                          <strong>Сума:</strong> $197
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Після здійснення переказу, будь ласка, надішліть скріншот чеку на email: payment@anaisisan.com
                    </p>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-blue-800 mb-4">Ви будете перенаправлені на PayPal для завершення оплати</p>
                      <p className="text-sm text-blue-600">Email для PayPal: payments@anaisisan.com</p>
                    </div>
                  </div>
                )}
              </div>

              <Button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full mt-8 bg-purple-600 hover:bg-purple-700 py-3 text-lg"
              >
                {isProcessing ? "Обробка платежу..." : `Оплатити $197`}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
