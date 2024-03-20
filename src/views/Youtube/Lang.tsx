import clsx from "clsx";

export type LangType = "ar" | "bn" | "bg" | "zh" | "hr" | "cs" | "da" | "nl" | "en" | "et" | "fi" | "fr" | "de" | "el" | "iw" | "hi" | "hu" | "id" | "it" | "ja" | "ko" | "lv" | "lt" | "no" | "pl" | "pt" | "ro" | "ru" | "sr" | "sk" | "sl" | "es" | "sw" | "sv" | "th" | "tr" | "uk" | "vi";
type LangProps = {
    lang: LangType
    disabled?: boolean
    onChangeLang: (lang: LangType) => void
}
const languages: { [key in LangType ]: string } = {
    "ar": "العربية",
    "bn": "বাংলা",
    "bg": "български",
    "zh": "中文",
    "hr": "hrvatski",
    "cs": "čeština",
    "da": "dansk",
    "nl": "Nederlands",
    "en": "English",
    "et": "eesti",
    "fi": "suomi",
    "fr": "français",
    "de": "Deutsch",
    "el": "ελληνικά",
    "iw": "עברית",
    "hi": "हिन्दी",
    "hu": "magyar",
    "id": "Indonesia",
    "it": "italiano",
    "ja": "日本語",
    "ko": "한국어",
    "lv": "latviešu",
    "lt": "lietuvių",
    "no": "norsk",
    "pl": "polski",
    "pt": "português",
    "ro": "română",
    "ru": "русский",
    "sr": "српски",
    "sk": "slovenčina",
    "sl": "slovenščina",
    "es": "español",
    "sw": "Kiswahili",
    "sv": "svenska",
    "th": "ไทย",
    "tr": "Türkçe",
    "uk": "українська",
    "vi": "Tiếng Việt"
}



export default function Lang({lang = "en", disabled, onChangeLang}: LangProps){
    return (
        <select 
            disabled={disabled}
            defaultValue={lang}
            onChange={(e)=>{
                onChangeLang(e.target.value as LangType)
            }}
            className={
                clsx(
                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-1",
        
                )
            }>
            {
                Object.keys(languages).map(key => {
                    return (
                        <option
                            key={key} 
                            value={key} 
                        >
                            {languages[key as LangType]}
                        </option>
                    )
                })
            }
        </select>
    )
}