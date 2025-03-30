//Commerce
import { Router } from 'express'; 
import * as PricesHistoryController from '../controllers/PricesHistory.Controller'; 
const router = Router(); 

//get all
router.get('/getall', PricesHistoryController.getAllPricesHistory); 

//get by id
router.get('/getone', PricesHistoryController.getOnePriceHistory); 

//add one
router.post('/addone', PricesHistoryController.addOnePriceHistory);

//update one
router.put('/updateone', PricesHistoryController.updateOnePriceHistory);

//delete one
router.delete('/deleteone', PricesHistoryController.deleteOnePriceHistory);

export default router;