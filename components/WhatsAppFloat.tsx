import { MessageCircle } from 'lucide-react';
import { wa } from '@/lib/site';
export default function WhatsAppFloat(){return <a className="whatsapp-float" href={wa('Hello Narwana Enterprises, I would like to know more about your solar installation services.')} target="_blank" rel="noreferrer" aria-label="Chat with Narwana Enterprises on WhatsApp"><MessageCircle size={22}/><span>Chat with us</span></a>}
