import { AIConfigCard } from "@/src/features/settings/components/ai-config-card";
import { APIKeysCard } from "@/src/features/settings/components/api-keys-card";

export default function SettingsPage(){
 return (
   <div className="space-y-6">
     <h1 className="text-2xl font-bold">
       Settings
     </h1>

     <AIConfigCard />
     <APIKeysCard />
   </div>
 )
}