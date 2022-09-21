import { container } from 'tsyringe';
import { IFiisRepository } from '../../modules/fundos_imobiliarios/repositories/IFiisRepository';
import { FiisRepository } from '../../modules/fundos_imobiliarios/repositories/implementations/FiisRepository';

container.registerSingleton<IFiisRepository>(
    "FiisRepository",
    FiisRepository
)