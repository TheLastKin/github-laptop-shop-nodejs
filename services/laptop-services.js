var Laptop = require('../models/LaptopModel');
var converter = require('../ultility/converter');
exports.getLaptops = async function(){
    let laptops = [];
    try{
        laptops = await Laptop.find({}).populate('adminId', 'username').populate('brand');
    }catch(e){
        console.log(e);
    }
    laptops = laptops.map(p => {
        let formatted_p = {...p._doc};
        formatted_p.addDate = converter.convertDate(formatted_p.addDate, "dd-MM-yyyy");
        formatted_p.admin = formatted_p.adminId.username;
        formatted_p.brand = formatted_p.brand.name;
        formatted_p.description = formatted_p.description.replaceAll('\n', '\\n').replaceAll('\r', '\\r').replaceAll('"', '&#8220');
        formatted_p.resolution = formatted_p.resolution.replaceAll('"', '&#8220');
        delete formatted_p.adminId;
        return formatted_p;
    });
    return laptops;
};

exports.getLaptopByID = async function (laptopID){
    let laptop = null;
    try{
        laptop = await Laptop.findById(laptopID).populate('brand').populate('adminId', 'username');
    }catch(e){
        console.log(e);
    }
    laptop.addDate = converter.convertDate(laptop.addDate, "dd-MM-yyyy");
    return laptop;
}

exports.getLaptopsWithQuery = async function(name, brand, sortByOther){
    let laptops = [];
    try{
        laptops = await Laptop.find({
            name: {$regex: name, $options: "i"},
        })
        .populate('adminId', 'displayName email')
        .populate('brand')
        .sort({[sortByOther]: -1});
        if(brand != "none"){
            laptops = laptops.filter(laptop => laptop.brand.name == brand);
        }
        laptops = laptops.map(p => {
            let formatted_p = { ...p._doc };
            formatted_p.addDate = converter.convertDate(formatted_p.addDate, "dd-MM-yyyy");
            formatted_p.brand = formatted_p.brand.name;
            formatted_p.description = formatted_p.description.replaceAll('\n', '\\n').replaceAll('\r', '\\r').replaceAll('"', '&#8220');
            formatted_p.resolution = formatted_p.resolution.replaceAll('"', '&#8220');
            return formatted_p;
        });
    }catch(e){
        console.log(e);
    }
    return laptops;
};

exports.getMostViewedLaptops = async () => {
    return await Laptop.find().populate('brand').sort({viewCount: 0}).limit(7);
};

exports.getLatestLaptops = async () => {
    return await Laptop.find().populate('brand').sort({price: 0, addDate: 0}).limit(7);
};

exports.addNewLaptop = function (laptop){
    try{
        laptop.save();
    }catch(e){
        console.error(e);
    }
};

exports.editLaptop = async function (laptopID, laptop){
    try{
        await Laptop.updateOne({ _id: laptopID }, laptop);
    }catch(e){
        console.error(e);
    }
};

exports.removeLaptop = async function (laptopID){
    try {
        await Laptop.deleteOne({ _id: laptopID });
    } catch (e) {
        console.error(e);
    }
};

exports.updateLaptopViewCount = async function(laptopID, viewCount){
    try{
        await Laptop.updateOne(laptopID, {$inc: {viewCount: viewCount}})
    }catch(e){
        console.error(e);
    }
};

exports.updateLatopRating = async function (laptopID, rating){
    try{

    }catch(e){
        console.error(e);
    }
};