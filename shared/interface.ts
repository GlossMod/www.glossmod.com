type IObject<T = any> = { [key: string]: T };

interface IGroup {
    id: number;
    name: string;
    description: string;
    permissions: number;
    menuIds: number[];
}

interface IResource {
    id?: number;
    mods_id?: number;
    mods_resource_name: string;
    mods_resource_desc?: string;
    mods_resource_url: string;
    mods_resource_size: string;
    mods_resource_sort: number;
    mods_resource_latest_version: boolean;
    mods_resource_version: string;
    mods_resource_createTime: Date;
    mods_resource_formart?: string;
}

export interface IMod {
    id: number;
    mods_author: string;
    mods_content: string;
    mods_createTime: Date;
    mods_desc?: string;
    mods_image_url?: string;
    mods_images_url?: string[];
    mods_isRecommend: number;
    mods_original: number;
    mods_title: string;
    mods_updateTime: Date;
    mods_version?: string;
    user_nickName: string;
    mods_credits?: number;
    mods_directions?: string;
    mods_key?: string[];
    mods_original_url?: string;
    mods_publish: number;
    mods_state: number;
    mods_state_dec?: string;
    mods_type_id: number;
    mods_type_name: string;
    mods_showAD: boolean;
    mods_license?: string;
    game_inbbs?: string;
    mods_tobbs?: boolean;

    mods_SilverSnakeCoin_cnt: number;
    mods_click_cnt: number;
    mods_collection_cnt: number;
    mods_download_cnt: number;
    mods_mark_cnt: number;

    user_Intr?: string;
    user_avatar?: string;
    user_tag?: string;
    user_tag_colour?: string;
    user_fan: number;

    game_cover_imgUrl?: string;
    game_name: string;
    game_id?: number;
    game_imgUrl?: string;
    game_path: string;
    gmm_gmm?: boolean;
    support_gmm?: boolean;

    mods_resource: IResource[];

    // mods_resource_name: string
    // mods_resource_desc?: string
    // mods_resource_url: string
    // mods_resource_createTime: string
    // mods_resource_size: string

    mods_charge_content?: boolean;
    mods_adult_content?: boolean;
    mods_API?: boolean;
}

export interface IUser {
    id: number;
    user_Intr?: string;
    user_avatar: string;
    user_fan?: number;
    user_gender?: number;
    user_nickName: string;
    user_tag?: string;
    user_tag_colour?: string;
    user_silverSnakeCoin: number;
    user_state?: number;
    user_p_show_adult?: boolean;
    user_p_show_charge?: boolean;
    user_tag_p?: boolean;
    user_p_favor?: boolean | 0 | 1;
    user_p_tobbs?: boolean;
    user_p_ckmsg?: boolean;
    user_p_ctmsg?: boolean;
    mod_count?: number;
    mod_original_count?: number;
    mod_translate_count?: number;
    user_protocol_time?: string;
    user_fav_list?: IObject<number[]>;
    user_follow_list: number[];
    user_banTime?: string | Date;
    user_banReason?: string;
    user_createTime?: string | Date;
    user_lastLoginTime?: string | Date;
    user_first_ip?: string;
    user_last_ip?: string;

    group: IGroup | null;
}
