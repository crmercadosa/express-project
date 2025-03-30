import PricesHistoryModel from '../models/PricesHistory.Model';
import boom from '@hapi/boom';

// GET ALL PRICES HISTORY
export const getAllPricesHistory = async () => { 
    let priceshistory; 
    try { 
          priceshistory = await PricesHistoryModel.find(); 
          return(priceshistory); 
    } catch (error) { 
      throw boom.internal(error); 
    } 
};

//GET ONE PRICE HISTORY BY ID
export const getOnePriceHistory = async (id) => { 
    let priceHistoryItem; 
    try { 
        priceHistoryItem = await PricesHistoryModel.findOne({ 
         ID: id, 
        }); 
      return(priceHistoryItem); 
    } catch (error) { 
      throw boom.internal(error); 
    } 
};

//ADD ONE PRICE HISTORY
export const addOnePriceHistory = async (data) => {
    try {
        const newPriceHistory = new PricesHistoryModel(data);
        await newPriceHistory.save();
        return newPriceHistory;
    } catch (error) {
        throw boom.internal(error);
    }
};

// UPDATE ONE PRICE HISTORY
export const updateOnePriceHistory = async (id, data) => {
    try {
        const updatedPriceHistory = await PricesHistoryModel.findOneAndUpdate(
            { ID: id },
            data,
            { new: true } // Para devolver el documento actualizado
        );
        return updatedPriceHistory;
    } catch (error) {
        throw boom.internal(error);
    }
};

// DELETE ONE PRICE HISTORY
export const deleteOnePriceHistory = async (id) => {
    try {
        const deletedPriceHistory = await PricesHistoryModel.findOneAndDelete({ ID: id });
        return deletedPriceHistory;
    } catch (error) {
        throw boom.internal(error);
    }
};

