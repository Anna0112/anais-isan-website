"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Play, Lock, CheckCircle, BookOpen, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function CoursePage() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([1, 2, 3])

  const lessons = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: `Урок ${i + 1}`,
    description: i === 0 ? "Кармічне тіло. Досвід тіла" : `Практика пробудження ${i + 1}`,
    duration: "45-60 хв",
    isCompleted: completedLessons.includes(i + 1),
    isLocked: i > 3, // First 4 lessons unlocked for demo
  }))

  const progressPercentage = (completedLessons.length / 25) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Тренувальний проект пробудження</h1>
              <p className="text-purple-200">Анаїс Ісан</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-purple-200">Прогрес курсу</div>
              <div className="text-lg font-semibold">{completedLessons.length}/25 уроків</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Course Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Вітаємо в курсі пробудження!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Ми починаємо практику пробудження, яка принесе зміни у ваше життя...
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ця практика буде поступовою, відповідальною і глибокою. Крок за кроком звільняти вас від зайвого, щоб
                очистити те, що ви так давно хочете знайти і зустріти.
              </p>

              <div className="space-y-3 mt-6">
                <h4 className="font-semibold text-purple-800">🔺️ Важливі рекомендації:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>🔺️ Віднесіться до поля і практик легко, грайливо, але з максимальною увагою у практиці</li>
                  <li>🔺️ Заведіть блокнот для записів спостережень, інсайтів, розборів після практик</li>
                  <li>🔺️ Запишіть свій Намір, з яким ви сюди прийшли...</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-3">Правила навчання проекту "Пробудження"</h4>
              <ul className="space-y-2 text-gray-700">
                <li>🔺️ Завести навчальний блокнот, писати туди розбори, завдання і інсайти після роботи в практиці</li>
                <li>🔺️ Спочатку слухаємо завдання, виконуємо, а потім проходимо практику</li>
                <li>🔺️ Прохання старатися, вчитися ВІДЧУВАТИ - це ключовий процес у практиці</li>
                <li>🔺️ Всі запитання у чат, те, що не зрозуміло. Ділимося результатами і досвідом</li>
                <li>🔺️ Тримати витримку і терпіння в практиці до кінця - ВИКОНУВАТИ ВСЕ ДО КІНЦЯ!</li>
                <li>🔺️ Коли хочеться порухати тілом - РОБИМО ЦЕ! (ставимо на паузу, розминаємося)</li>
              </ul>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Загальний прогрес</span>
                <span className="text-purple-600 font-semibold">{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Lessons Grid */}
        <div className="grid gap-4">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Уроки курсу</h2>

          {lessons.map((lesson) => (
            <Card
              key={lesson.id}
              className={`transition-all hover:shadow-md ${
                lesson.isCompleted
                  ? "border-green-200 bg-green-50"
                  : lesson.isLocked
                    ? "border-gray-200 bg-gray-50"
                    : "border-purple-200"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        lesson.isCompleted ? "bg-green-100" : lesson.isLocked ? "bg-gray-100" : "bg-purple-100"
                      }`}
                    >
                      {lesson.isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : lesson.isLocked ? (
                        <Lock className="w-6 h-6 text-gray-400" />
                      ) : (
                        <Play className="w-6 h-6 text-purple-600" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{lesson.title}</h3>
                      <p className="text-gray-600">{lesson.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{lesson.duration}</span>
                        </div>
                        {lesson.isCompleted && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Завершено
                          </Badge>
                        )}
                        {lesson.isLocked && (
                          <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                            Заблоковано
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    {lesson.isLocked ? (
                      <Button disabled variant="outline">
                        Заблоковано
                      </Button>
                    ) : (
                      <Link href={`/lesson/${lesson.id}`}>
                        <Button
                          className={
                            lesson.isCompleted ? "bg-green-600 hover:bg-green-700" : "bg-purple-600 hover:bg-purple-700"
                          }
                        >
                          {lesson.isCompleted ? "Переглянути знову" : "Почати урок"}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificate Section */}
        {progressPercentage === 100 && (
          <Card className="mt-8 bg-gradient-to-r from-purple-100 to-purple-50 border-purple-200">
            <CardContent className="p-8 text-center">
              <Award className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-purple-800 mb-2">Вітаємо з завершенням курсу!</h3>
              <p className="text-gray-700 mb-6">
                Ви успішно пройшли всі 25 уроків. Ваш сертифікат готовий до завантаження.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Завантажити сертифікат
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
