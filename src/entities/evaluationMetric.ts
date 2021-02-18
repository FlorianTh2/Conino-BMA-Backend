import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToMany,
    JoinTable,
    OneToMany,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { Project } from "./project";
import { User } from "./user";
import { MaturityModel } from "./maturityModel";
import { UserEvaluationMetric } from "./userEvaluationMetric";
import { UserPartialModel } from "./userPartialModel";
import { PartialModel } from "./partialModel";

@Entity()
export class EvaluationMetric extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column("text", {
        nullable: true,
    })
    description: string;

    @Column()
    weight: number;

    @OneToMany(() => UserEvaluationMetric, (userEvaluationArea) => userEvaluationArea.evaluationArea)
    userEvaluationAreas: UserEvaluationMetric[];

    @ManyToOne(() => PartialModel, (partialModel) => partialModel.evaluationAreas)
    partialModel: PartialModel;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}