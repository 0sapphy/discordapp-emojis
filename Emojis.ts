import { constants } from "./constant";
import axios from 'axios';
import { Items, Data } from "./types/List";

interface EmojisOptions {
    applicationId: string,
    applicationToken: string
}


export class Emojis {
    protected appId: string;
    protected appToken: string

    public constructor(options: EmojisOptions) {
        this.appId = options.applicationId;
        this.appToken = options.applicationToken;
    }

    /**
     * @link https://discord.com/developers/docs/resources/emoji#list-application-emojis
     * @description List all emojis for the application.
     */
    public async list() {
        const res = await axios.get(`${this.formatURL()}/emojis`, this.getOptions());
        return { items: res.data.items } as Items;
    }
    
    /**
     * @link https://discord.com/developers/docs/resources/emoji#get-application-emoji
     * @param {string} emojiId 
     */
    public async get(emojiId: string) {
        const res = await axios.get(`${this.formatURL()}/emojis/${emojiId}`, this.getOptions());
        return res.data as Data;
    }

    private async create() {
    }

    private formatURL() {
        return `${constants.url}/applications/${this.appId}`
    }

    private getOptions() {
        return {
            headers: {
                Authorization: `Bot ${this.appToken}`
            }
        }
    }
}