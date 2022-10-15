import { FiisRepository } from '@modules/fundos_imobiliarios/infra/typeorm/repositories/FiisRepository';
import { IFiisRepository } from '@modules/fundos_imobiliarios/repositories/IFiisRepository';
import { container } from 'tsyringe';

container.registerSingleton<IFiisRepository>(
    "FiisRepository",
    FiisRepository
)