
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const projects = [
    { id: 1, category: "residential", title: "Минималистичная квартира", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1170" },
    { id: 2, category: "commercial", title: "Кальянная Milano", image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=1170" },
    { id: 3, category: "residential", title: "Апартаменты для блогера", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1035" },
    { id: 4, category: "commercial", title: "Коворкинг Plasma", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1169" },
    { id: 5, category: "residential", title: "Семейная квартира", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=987" },
    { id: 6, category: "commercial", title: "Ресторан La Vita", image: "https://images.unsplash.com/photo-1552960394-c8add16f8205?q=80&w=987" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const blogPosts = [
    {
      id: 1,
      title: "Как выбрать цветовую палитру для интерьера",
      excerpt: "Правильный подбор цветов может полностью преобразить помещение...",
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1170"
    },
    {
      id: 2,
      title: "5 ошибок в планировке кухни",
      excerpt: "Избегайте этих распространенных проблем при проектировании...",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=987"
    },
    {
      id: 3,
      title: "Освещение в интерьере: принципы и приемы",
      excerpt: "Грамотное освещение — это не только функциональность, но и настроение...",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1287"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)"
          }}
        />
        <div className="container mx-auto px-6 z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Интерьеры, в которых<br /> удобно <span className="text-blue-400">жить</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Создаём проекты интерьера, продуманные до каждой розетки
            и безупречные визуально
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-md">
            Заказать консультацию
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50" id="about">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Создаём интерьеры, которые делают жизнь лучше</h2>
              <p className="text-gray-600 mb-6">
                Мы помогаем людям, которые ценят красоту и удобство, получить продуманный до мельчайших деталей интерьер без ошибок и стресса, чтобы жить или работать в пространстве, полностью подстроенном под их ритм и стиль жизни.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-blue-500 mb-2">125+</h3>
                  <p className="text-gray-500">Реализованных проектов</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-blue-500 mb-2">97%</h3>
                  <p className="text-gray-500">Довольных клиентов</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-blue-500 mb-2">8</h3>
                  <p className="text-gray-500">Лет опыта</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1074" 
                alt="Наша команда" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20" id="portfolio">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Наши работы</h2>
          
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveFilter("all")}
                className={activeFilter === "all" ? "bg-blue-500 text-white" : ""}
              >
                Все проекты
              </TabsTrigger>
              <TabsTrigger 
                value="residential" 
                onClick={() => setActiveFilter("residential")}
                className={activeFilter === "residential" ? "bg-blue-500 text-white" : ""}
              >
                Жилые помещения
              </TabsTrigger>
              <TabsTrigger 
                value="commercial" 
                onClick={() => setActiveFilter("commercial")}
                className={activeFilter === "commercial" ? "bg-blue-500 text-white" : ""}
              >
                Коммерческие
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <Button variant="outline" className="mt-4 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                      Смотреть проект
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                    <path d="M12 3v6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Дизайн-проект</h3>
                <p className="text-gray-600 mb-4">Полный пакет документации для реализации интерьера: планировка, 3D-визуализации, рабочие чертежи, спецификации.</p>
                <p className="font-semibold text-blue-500">от 3 500 ₽/м²</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Авторский надзор</h3>
                <p className="text-gray-600 mb-4">Контроль за реализацией проекта: проверка материалов, консультации, выезды на объект, корректировки по ходу ремонта.</p>
                <p className="font-semibold text-blue-500">от 40 000 ₽/месяц</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <line x1="12" y1="22" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Комплектация</h3>
                <p className="text-gray-600 mb-4">Подбор и закупка материалов, мебели, освещения и декора: поиск лучших предложений, заказ и контроль поставок.</p>
                <p className="font-semibold text-blue-500">от 10% от стоимости</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20" id="blog">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Полезные статьи</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 text-blue-500 hover:text-blue-700">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white" id="contact">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="mb-8">
                Готовы обсудить ваш проект? Заполните форму, и мы свяжемся с вами, чтобы назначить консультацию.
              </p>
              
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-blue-500 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span>+7 (495) 123-45-67</span>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-blue-500 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <span>info@design-studio.ru</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-blue-500 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span>Москва, ул. Дизайнерская, 42</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 text-gray-800">
                <div className="mb-4">
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ваше имя"
                    className="w-full"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </div>
                
                <div className="mb-4">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ваш email"
                    className="w-full"
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                  />
                </div>
                
                <div className="mb-4">
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Ваш телефон"
                    className="w-full"
                    required
                    value={formData.phone}
                    onChange={handleFormChange}
                  />
                </div>
                
                <div className="mb-6">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Расскажите немного о вашем проекте"
                    className="w-full h-32"
                    value={formData.message}
                    onChange={handleFormChange}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-950 text-gray-400">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-xl font-bold">Design Studio</h3>
              <p className="mt-2">Создаем интерьеры, в которых хочется жить</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>© 2025 Design Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
