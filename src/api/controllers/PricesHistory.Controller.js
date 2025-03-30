import * as PricesHistoryService from '../services/PricesHistory.Service';
import boom from '@hapi/boom';

//FIC: API GET 
//---------------------------------------- 
//FIC: All Prices History
export const getAllPricesHistory = async (req, res, next) => { 
    try{ 
        const pricesHistoryList = await PricesHistoryService.getAllPricesHistory(); 
        if (!pricesHistoryList) { 
        throw boom.notFound('No se encontraron registros.'); 
        } else if (pricesHistoryList) { 
        res.status(200).json(pricesHistoryList); 
        }  
    } catch(error) { 
    next(error); 
    } 
};

//FIC: Just one Price History.
export const getOnePriceHistory = async (req, res, next) => {
    try {
    const { IdPrice } = req.query;
    const priceHistoryItem = await PricesHistoryService.getOnePriceHistory(IdPrice);
    if (!priceHistoryItem) {
      throw boom.notFound('No se encontraron registros.');
    } else if (priceHistoryItem) {
      res.status(200).json(priceHistoryItem);
    } 
   }catch(error){
    next(error);
  }
};

// Add new price history document
export const addOnePriceHistory = async (req, res, next) => {
    try {
        const priceHistoryData = req.body;
        const newPriceHistory = await PricesHistoryService.addOnePriceHistory(priceHistoryData);
        res.status(201).json(newPriceHistory);
    } catch (error) {
        next(error);
    }
};

// UPDATE ONE PRICE HISTORY
export const updateOnePriceHistory = async (req, res, next) => {
    try {
        const { IdPrice } = req.query;
        const priceHistoryData = req.body;
        const updatedPriceHistory = await PricesHistoryService.updateOnePriceHistory(IdPrice, priceHistoryData);
        
        if (!updatedPriceHistory) {
            throw boom.notFound('No se encontró el registro para actualizar.');
        }

        res.status(200).json(updatedPriceHistory);
    } catch (error) {
        next(error);
    }
};

// DELETE ONE PRICE HISTORY
export const deleteOnePriceHistory = async (req, res, next) => {
    try {
        const { IdPrice } = req.query;
        const deletedPriceHistory = await PricesHistoryService.deleteOnePriceHistory(IdPrice);
        
        if (!deletedPriceHistory) {
            throw boom.notFound('No se encontró el registro para eliminar.');
        }

        res.status(200).json({ message: 'Registro eliminado correctamente', deletedPriceHistory });
    } catch (error) {
        next(error);
    }
};

