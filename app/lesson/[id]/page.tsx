"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, Volume2, ArrowLeft, ArrowRight, CheckCircle, BookOpen } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function LessonPage() {
  const params = useParams()
  const lessonId = Number.parseInt(params.id as string)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [videoProgress, setVideoProgress] = useState(0)
  const [tutorialProgress, setTutorialProgress] = useState(0)
  const [isVideoCompleted, setIsVideoCompleted] = useState(false)
  const [isTutorialCompleted, setIsTutorialCompleted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const lessonContent = {
    1: {
      title: "Кармічне тіло. Досвід тіла",
      description: "Перший урок присвячений роботі з кармічним тілом та розвитку відчуття тіла",
      tutorial: `1. Закриваємо очі, розміщаємося комфортно і звертаємо увагу у середину тіла...
(під медитативну ритмічну музику)
Відчуваємо тіло...

2. ПОЧИНАЄМО ДИХАННЯ
Глибокий вдих, наповнюємося і піднімаємо увагу вверх,
видихаємо вниз...
(Розгоняємо енергію)
Увага на диханні (дихаємо, верх - наповнення, видих - вниз розслаблення)
Відчуваємо тіло і Дихання...

3. РОЗДІЛЯЄМО УВАГУ НА СЕРЦЕ
Дихання + ритм серця
Відчуваємо...
Вдих наповнення, піднімаємося вверх Відчуваємо серце
Видихаємо вниз, розслаблення
Дихаємо, Відчуваємо...

4. РОЗДІЛЯЄМО УВАГУ НА ХРЕБЕТ
Відчуваємо нижню частину хребта і піднімаємо увагою вверх
Дихання + ритм серця + хребет
Дихаємо і об'єднуємо відчуття в одну хвилю
Дихання (наповнюємо тіло енергією)
Дихаємо, Відчуваємо...

5. ПЕРЕНОСИМО УВАГУ НА СТОПИ, ПАЛЬЦІ НА СТОПАХ
Відчуваємо...
Починаємо увагою відчувати пальці на стопах, і заповнюємо пальці, стопи,
щиколотки, гомілки, коліна
Всю нижню частину тіла до колін
Відчуваємо пульсацію, вібрацію, щільність і ніби збільшення в об'ємі
Піднімаємо увагу вище колін, бедра, сідниці, низ живота
Відчуваємо, піднімаємо енергію по тілу...
Заповнюємо увагою весь живіт, спину, хребет
Відчуваємо...
Заповнюємо увагою кисті рук, долоні, пальці на руках, всю зону рук, до самих плечей
Відчуваємо, увага в пальцях, пульсацію, вібрацію...
Заповнюємо повністю руки, грудну клітину, плечі, тепер шия, голова, обличчя

6. РОЗШИРЯЄМО УВАГУ ПОВНІСТЮ НА ВСЕ ТІЛО, ВІД ПАЛЬЦІВ НА НОГАХ ДО ПАЛЬЦІВ НА РУКАХ І ГОЛОВИ
Відчуваємо об'єм, вібрацію, пульсацію
Дихаємо вверх вдих, вниз видих`,
    },
  }

  const currentLesson = lessonContent[lessonId as keyof typeof lessonContent] || {
    title: `Урок ${lessonId}`,
    description: `Практика пробудження ${lessonId}`,
    tutorial: "Контент уроку буде доступний найближчим часом...",
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)
    const handleEnded = () => {
      setIsVideoCompleted(true)
      setVideoProgress(100)
    }

    video.addEventListener("timeupdate", updateTime)
    video.addEventListener("loadedmetadata", updateDuration)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("timeupdate", updateTime)
      video.removeEventListener("loadedmetadata", updateDuration)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  useEffect(() => {
    if (duration > 0) {
      setVideoProgress((currentTime / duration) * 100)
    }
  }, [currentTime, duration])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const markTutorialComplete = () => {
    setIsTutorialCompleted(true)
    setTutorialProgress(100)
  }

  const isLessonComplete = isVideoCompleted && isTutorialCompleted

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/course" className="flex items-center text-purple-200 hover:text-white">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Повернутися до курсу
              </Link>
            </div>
            <div className="text-right">
              <div className="text-sm text-purple-200">Урок {lessonId} з 25</div>
              {isLessonComplete && (
                <div className="flex items-center text-green-300">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Завершено
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Lesson Header */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">{currentLesson.title}</CardTitle>
              <CardDescription className="text-lg">{currentLesson.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Прогрес відео</span>
                    <span>{Math.round(videoProgress)}%</span>
                  </div>
                  <Progress value={videoProgress} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Прогрес завдання</span>
                    <span>{Math.round(tutorialProgress)}%</span>
                  </div>
                  <Progress value={tutorialProgress} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <Tabs defaultValue="video" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="video" className="flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Відео урок</span>
              </TabsTrigger>
              <TabsTrigger value="tutorial" className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Завдання</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="video">
              <Card>
                <CardContent className="p-0">
                  <div className="relative bg-black rounded-t-lg overflow-hidden">
                    <video
                      ref={videoRef}
                      className="w-full aspect-video"
                      poster="/placeholder.svg?height=400&width=800"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    >
                      <source src="/placeholder-video.mp4" type="video/mp4" />
                      Ваш браузер не підтримує відео.
                    </video>

                    {/* Video Controls Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex items-center space-x-4">
                        <Button size="sm" variant="ghost" onClick={togglePlay} className="text-white hover:bg-white/20">
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </Button>

                        <div className="flex-1 flex items-center space-x-2">
                          <span className="text-white text-sm">{formatTime(currentTime)}</span>
                          <div className="flex-1 bg-white/30 rounded-full h-1">
                            <div
                              className="bg-purple-500 h-1 rounded-full transition-all"
                              style={{ width: `${videoProgress}%` }}
                            />
                          </div>
                          <span className="text-white text-sm">{formatTime(duration)}</span>
                        </div>

                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Volume2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Інструкції до відео</h3>
                    <p className="text-gray-600">
                      Спочатку прослухайте завдання, виконайте його, а потім переходьте до практики. Пам'ятайте про
                      важливість відчувань у процесі практики.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tutorial">
              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-800">Практичні вказівки</CardTitle>
                  <CardDescription>Детальні інструкції для виконання практики</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed font-sans">
                      {currentLesson.tutorial}
                    </pre>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Важливо пам'ятати:</h4>
                      <ul className="text-yellow-700 space-y-1">
                        <li>• Записуйте свої відчуття та інсайти в блокнот</li>
                        <li>• Не поспішайте, дозвольте собі повністю відчути процес</li>
                        <li>• При потребі робіть паузи для розминки</li>
                      </ul>
                    </div>

                    {!isTutorialCompleted && (
                      <Button onClick={markTutorialComplete} className="w-full bg-purple-600 hover:bg-purple-700">
                        Позначити завдання як виконане
                      </Button>
                    )}

                    {isTutorialCompleted && (
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span>Завдання виконано!</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <div>
              {lessonId > 1 && (
                <Link href={`/lesson/${lessonId - 1}`}>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Попередній урок</span>
                  </Button>
                </Link>
              )}
            </div>

            <div>
              {lessonId < 25 && isLessonComplete && (
                <Link href={`/lesson/${lessonId + 1}`}>
                  <Button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700">
                    <span>Наступний урок</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
