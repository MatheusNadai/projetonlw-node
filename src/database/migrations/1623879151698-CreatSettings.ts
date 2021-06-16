import {MigrationInterface, QueryRunner, QueryRunnerAlreadyReleasedError, Table} from "typeorm";

export class CreatSettings1623879151698 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
         
      await queryRunner.createTable(
          new Table({
            name: "settings",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary : true
                },
                {
                    name: "username",
                    type: "varchar"
                },
                {
                    name: "chat",
                    type: "boolean",
                    default: true
                },
                {
                    name: "update_at",
                    type: "tinestamp",
                    default: "now()",
                
                }

            ]
          })
      ) 
    }
  public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
