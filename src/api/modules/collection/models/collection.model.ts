import ApiCrudModelUtil from "@/api/utils/crud/api-crud-model.util";
import CollectionInputDto from "@/api/modules/collection/dto/collection-input.dto";
import CollectionDto from "@/api/modules/collection/dto/collection.dto";
import CollectionUpdateDto from "@/api/modules/collection/dto/collection-update.dto";
import ApiResponseDto from "@/api/dto/api-response.dto";

export default class CollectionModel extends ApiCrudModelUtil<CollectionInputDto, CollectionDto, CollectionUpdateDto> {
  constructor() {
    super("/collection");
  }

  override async getAll(): Promise<ApiResponseDto<CollectionDto[]>> {
    return super.getAll(null);
  }
}