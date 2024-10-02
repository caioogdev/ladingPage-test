import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { IconType } from "react-icons/lib";

interface IServiceCard {
    title: string;
    description: string;
    price: string;
    Icon: IconType;
}

export function ServiceCard({ title, description, price, Icon }: IServiceCard) {
    const priceNumber = parseFloat(price.replace('R$', '').replace(',', '.'));
    const maxPrice = 150;
    const progressPercentage = Math.min((priceNumber / maxPrice) * 100, 100);

    return (
        <Card className="shadow-md hover:shadow-lg transition-shadow flex flex-col justify-center items-center text-center p-6 bg-[#212121] text-white">
            <CardHeader className="flex flex-col items-center text-center">
                <Icon size={48} className="text-[#E9C664] mb-4" />
                <CardTitle className="text-2xl font-normal text-white tracking-wide" style={{ fontFamily: "'Abril Fatface', serif", fontWeight: 400, fontStyle: 'normal' }}>{title}</CardTitle>
                <CardDescription className="text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontStyle: 'normal', fontOpticalSizing: 'auto' }}>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center">
                <div className="w-24 h-2 bg-zinc-800 rounded-full mr-4">
                    <div
                        className="h-2 bg-[#D4AF37] rounded-full"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
                <p className="text-lg font-semibold text-[#E9C664]">{price}</p>
            </CardContent>
        </Card>
    );
}