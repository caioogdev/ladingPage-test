import { ServiceCard } from '@/components/service-card';
import { GiScissors, GiRazor, GiBeard } from "react-icons/gi";
import { FaCut, FaHandSparkles } from "react-icons/fa";
import "./styles.css";
import { useEffect, useState } from 'react';
import homeImage from '../../assets/homeHero.png';
import footerImage from '../../assets/footer.png';
import mustacheImage from '../../assets/mustache.png';
import brandOne from "../../assets/brands/brand_1.jpeg"
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import scissorsImage from '../../assets/scissors.png'
import { CiClock2 } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { RiDiscountPercentLine } from 'react-icons/ri';

export function Page() {
    const [isHome, setIsHome] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsHome(false);
            } else {
                setIsHome(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsSheetOpen(false);
        }
    };

    return (
        <div className={`${isSheetOpen ? 'blur-md' : ''}`}>
            <div id='home'>
                <nav className="fixed inset-x-0 top-0 z-50 bg-black shadow-sm">
                    <div className="w-full max-w-7xl mx-auto px-4">
                        <div className={`flex justify-between items-center transition-all duration-300 ${isHome ? 'h-[6rem]' : 'h-[2.5rem]'}`}>

                            {isMobile ? (
                                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                                    <SheetTrigger>
                                        <button className="text-white text-3xl bg-black">☰</button>
                                    </SheetTrigger>
                                    <SheetContent side="left" className="p-4 bg-gray-200 text-black">
                                        <h1 className="text-3xl font-bold mb-4">BARBEARIA CAIO</h1>
                                        <a href="#home" className="block mb-4 text-2xl hover:underline" onClick={() => setIsSheetOpen(false)}>
                                            Início
                                        </a>
                                        <a href="#services" className="block mb-4 text-2xl hover:underline" onClick={() => setIsSheetOpen(false)}>
                                            Serviços
                                        </a>
                                        <a href="#contact" className="block text-2xl hover:underline" onClick={() => setIsSheetOpen(false)}>
                                            Contato
                                        </a>
                                    </SheetContent>
                                </Sheet>
                            ) : (
                                <nav className="hidden md:flex gap-6 text-white text-2xl font-thin items-center justify-center w-full transition-colors">
                                    <a href="#home" className="hover:underline">
                                        Início
                                    </a>
                                    <a href="#services" className="hover:underline">
                                        Serviços
                                    </a>
                                    <a href="#contact" className="hover:underline">
                                        Contato
                                    </a>
                                </nav>
                            )}
                        </div>
                    </div>
                </nav>

                <div id='home' className="relative h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${homeImage})` }}>

                    <div className="flex flex-col justify-center items-center h-screen text-center">
                        <img src={scissorsImage} alt="Scissors Icon" className="mb-6" />
                        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl relative inline-block px-8 py-4 uppercase border-t-4 border-b-4 border-[#E9C664] tracking-wider" style={{ fontFamily: "'Abril Fatface', serif", fontWeight: 400, fontStyle: 'normal' }}>
                            BARBEARIA CAIO
                        </h1>
                        <img src={mustacheImage} alt="Scissors Icon" className="mt-6" />
                    </div>
                </div>
            </div>

            <div id="services" className="py-12 bg-[#212121]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-6xl h1-services tracking-widest text-[#E9C664]">Serviços</h1>
                    </div>

                    <div className="space-y-8">
                        <div className="overflow-x-auto snap-x whitespace-nowrap scrollbar-hide cursor-grab">
                            <div className="inline-flex space-x-6">
                                <div className="snap-center">
                                    <ServiceCard
                                        title="Corte Militar"
                                        description="Corte estilo militar, prático e com estilo."
                                        price="R$ 60,00"
                                        Icon={GiScissors}
                                    />
                                </div>
                                <div className="snap-center">
                                    <ServiceCard
                                        title="Descoloração Capilar"
                                        description="Descoloração completa para um visual renovado."
                                        price="R$ 140,00"
                                        Icon={FaCut}
                                    />
                                </div>
                                <div className="snap-center">
                                    <ServiceCard
                                        title="Corte Degradê"
                                        description="Corte moderno com transição suave entre comprimentos."
                                        price="R$ 80,00"
                                        Icon={FaCut}
                                    />
                                </div>
                                <div className="snap-center">
                                    <ServiceCard
                                        title="Corte + Lavagem"
                                        description="Corte acompanhado de lavagem relaxante."
                                        price="R$ 85,00"
                                        Icon={FaCut}
                                    />
                                </div>
                                <div className="snap-center">
                                    <ServiceCard
                                        title="Manicure"
                                        description="Tratamento completo para unhas impecáveis."
                                        price="R$ 50,00"
                                        Icon={FaHandSparkles}
                                    />
                                </div>
                                <div className="snap-center">
                                    <ServiceCard
                                        title="Corte Social"
                                        description="Corte tradicional para um visual formal."
                                        price="R$ 75,00"
                                        Icon={GiScissors}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="overflow-x-auto snap-x whitespace-nowrap scrollbar-hide cursor-grab">
                            <div className="inline-flex space-x-6">
                                <div className="snap-center">
                                    <ServiceCard
                                        title="Barba Completa"
                                        description="Aparar e modelar a barba com perfeição."
                                        price="R$ 40,00"
                                        Icon={GiBeard}
                                    />
                                </div>
                                <div className="snap-center">
                                    <ServiceCard
                                        title="Barboterapia"
                                        description="Tratamento completo com toalhas quentes e produtos especiais."
                                        price="R$ 100,00"
                                        Icon={GiBeard}
                                    />
                                </div>
                                <div className="snap-center">
                                    <ServiceCard
                                        title="Pezinho"
                                        description="Aparar o contorno para um acabamento perfeito."
                                        price="R$ 35,00"
                                        Icon={GiRazor}
                                    />
                                </div>
                                <div className="snap-center">
                                    <ServiceCard
                                        title="Sobrancelha"
                                        description="Modelagem e alinhamento da sobrancelha."
                                        price="R$ 40,00"
                                        Icon={GiRazor}
                                    />
                                </div>
                                <div className="snap-center">
                                    <ServiceCard
                                        title="Pezinho"
                                        description="Aparar o contorno para um acabamento perfeito."
                                        price="R$ 35,00"
                                        Icon={GiRazor}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="discount bg-[#D4AF37] py-12 p-4 ">
                <div className="max-w-7xl mx-auto text-left text-black">
                    <div className='flex items-center space-x-1'>
                        <RiDiscountPercentLine size={50} className="text-black" />
                        <h1 className="text-5xl font-bold">25% DE DESCONTO</h1>
                    </div>
                    <p className="text-xl max-w-4xl mb-6">
                        Aproveite 25% de desconto exclusivo na sua primeira visita a qualquer uma de nossas unidades! Uma oportunidade imperdível para experimentar nossos serviços de alta qualidade. Não perca!
                    </p>
                    <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded hover:bg-gray-800 transition" onClick={() => handleScroll('footer')}>
                        Ver Unidades
                    </button>
                </div>
            </div>

            <div id='contact' className='contact bg-white py-12 flex flex-col justify-center items-center'>
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-6 tracking-widest">Contato</h1>
                    <p className="text-lg mb-8 max-w-4xl mx-auto">
                        Estamos prontos para te atender! Entre em contato conosco para tirar suas dúvidas ou agendar seu horário. Visite uma de nossas unidades para conhecer nossos serviços de excelência.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center gap-2">
                            <MdOutlineEmail size={40} style={{ color: "#E9C664" }} />
                            <h2 className="text-2xl font-semibold">EMAIL</h2>
                            <p>barbeariafelipe1@gmail.com</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <FiPhone size={40} style={{ color: "#E9C664" }} />
                            <h2 className="text-2xl font-semibold">TELEFONE</h2>
                            <p>(21) 99777-8694</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <CiClock2 size={40} style={{ color: "#E9C664" }} />
                            <h2 className="text-2xl font-semibold">HORÁRIO</h2>
                            <p>Seg - Qua: 08:00 às 20:00</p>
                            <p>Qui - Sáb: 08:00 às 21:00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id='publi' className="publi bg-[#212121] py-12 px-8 flex flex-col sm:flex-row items-center justify-between sm:space-x-8 space-y-8 sm:space-y-0">
                <div className="text-center flex-1">
                    <h1 className="text-[#E9C664] text-4xl font-bold mb-4">MARCAS QUE TRABALHAMOS</h1>
                    <p className="text-white text-lg max-w-md mx-auto">
                        Selecionamos cuidadosamente as marcas que oferecemos, priorizando qualidade, inovação e compromisso com a excelência.
                        Cada uma das nossas parceiras reflete nossa dedicação em trazer o melhor para nossos clientes, garantindo produtos de
                        confiança e alto desempenho.
                    </p>
                </div>

                <div className="hidden sm:block border-l-2 border-[#E9C664] h-40"></div>

                <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <img src={brandOne} className="w-full h-40 object-contain" />
                    <img src={brandOne} className="w-full h-40 object-contain" />
                    <img src={brandOne} className="w-full h-40 object-contain" />
                    <img src={brandOne} className="w-full h-40 object-contain" />
                    <img src={brandOne} className="w-full h-40 object-contain" />
                    <img src={brandOne} className="w-full h-40 object-contain" />
                </div>
            </div>

            <div id="footer" className="py-12 text-white bg-center bg-cover" style={{ backgroundImage: `url(${footerImage})` }}>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="space-y-4 text-center">
                        <h1 className="text-3xl font-bold" style={{ fontFamily: "'Abril Fatface', serif", fontWeight: 400, fontStyle: 'normal' }}>Venha nos Visitar</h1>
                        <p className="text-2xl" style={{ fontFamily: "'Inter', sans-serif", fontSize: "normal", fontWeight: 300, fontOpticalSizing: 'auto' }}>Rua Xavier da Silveira 57, Copacabana, RJ</p>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.7806266503813!2d-43.18833368488644!3d-22.98333104649156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f30d83b7ffb%3A0xf9d053230b0f57e1!2sRua%20Xavier%20da%20Silveira%2C%2057%20-%20Copacabana%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1sen!2sbr!4v1637429874506!5m2!1sen!2sbr"
                            width="100%" height="300" style={{ border: 0 }} loading="lazy" title="Google Map"
                        ></iframe>
                    </div>

                    <div className="bg-[#212121] p-6 rounded-lg space-y-4">
                        <h2 className="title-form text-2xl font-bold">Fale Conosco</h2>

                        <div>
                            <label className="block text-white mb-1">Nome</label>
                            <Input type="text" placeholder="Seu Nome" className="w-full" />
                        </div>

                        <div>
                            <label className="block text-white mb-1">Email</label>
                            <Input type="email" placeholder="Seu Email" className="w-full" />
                        </div>

                        <div>
                            <label className="block text-white mb-1">Assunto</label>
                            <Input type="text" placeholder="Assunto" className="w-full" />
                        </div>

                        <div>
                            <label className="block text-white mb-1">Sua Mensagem</label>
                            <Textarea placeholder="Escreva sua mensagem aqui..." className="w-full" />
                        </div>

                        <Button className="w-full bg-[#E9C664] text-black font-bold py-2 hover:bg-[#d4af37]">
                            Enviar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}