
export default function CropedImageUrl  (url:string){
    if(!url) return '';
    let target = 'media/'
    let Index = url.indexOf('media/') + target.length
    return url.slice(0,Index) + "crop/600/400/" + url.slice(Index)
    //return url
    // ek url hain : https://www.myImage/media/imageName
    // return https://www.myImage/media/crop/600/400/imageName

}