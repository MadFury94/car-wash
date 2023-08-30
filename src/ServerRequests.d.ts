/*
 * This is an auto-generated file.
 * ----- DO NOT MODIFY -----
 * */

export type StringOrNumber = string | number;
export type SRBody = Record<StringOrNumber, any>;
export type SRQuery = Record<StringOrNumber, StringOrNumber>;
export type SRParams = StringOrNumber | StringOrNumber[];
export type SRConfig = Partial<{ query: SRQuery; body: SRBody }> &
  Record<string, any>;

/**
 * Parse name to path.
 */
export declare function route(
  name: string,
  params?: SRParams,
  query?: SRQuery,
): string;

/**
 * Parse name to path with validation.
 */
export declare function routeStrict(
  name: string,
  params?: SRParams,
  query?: SRQuery,
): string;

declare const _default: {
  get: {
    /**
     * **AppController@index**
     *
     * - `[index]`
     * - `GET: /`
     */
    index<T = any>(
      query?: SRQuery,
      config?: SRConfig,
      ...others: any[]
    ): SRF<T>;
    api: {
      /**
       * **AppController@pulse**
       *
       * - `[api.pulse]`
       * - `GET: /v1/pulse`
       */
      pulse<T = any>(
        query?: SRQuery,
        config?: SRConfig,
        ...others: any[]
      ): SRF<T>;
      packages: {
        /**
         * **CarPackageController@all**
         *
         * - `[api.packages.all]`
         * - `GET: /v1/api/packages`
         */
        all<T = any>(
          query?: SRQuery,
          config?: SRConfig,
          ...others: any[]
        ): SRF<T>;
      };
    };
    admin: {
      /**
       * **admin/CarPackageController@one**
       *
       * - `[admin.packages]`
       * - `GET: /v1/admin/packages/:packageUuid`
       */
      packages<T = any>(
        params: { packageUuid: StringOrNumber } | SRParams,
        query?: SRQuery,
        config?: SRConfig,
        ...others: any[]
      ): SRF<T>;
      features: {
        /**
         * **admin/FeaturesController@all**
         *
         * - `[admin.features.all]`
         * - `GET: /v1/admin/features`
         */
        all<T = any>(
          query?: SRQuery,
          config?: SRConfig,
          ...others: any[]
        ): SRF<T>;

        /**
         * **admin/FeaturesController@one**
         *
         * - `[admin.features.one]`
         * - `GET: /v1/admin/features/:featureUuid`
         */
        one<T = any>(
          params: { featureUuid: StringOrNumber } | SRParams,
          query?: SRQuery,
          config?: SRConfig,
          ...others: any[]
        ): SRF<T>;
      };

      /**
       * **admin/BookingController@all**
       *
       * - `[admin.all]`
       * - `GET: /v1/admin/bookings/`
       */
      all<T = any>(
        query?: SRQuery,
        config?: SRConfig,
        ...others: any[]
      ): SRF<T>;
    };
  };
  post: {
    api: {
      /**
       * **AuthController@login**
       *
       * - `[api.login]`
       * - `POST: /v1/auth/login`
       */
      login<T = any>(
        body?: SRBody,
        config?: SRConfig,
        ...others: any[]
      ): Promise<T>;

      /**
       * **AuthController@register**
       *
       * - `[api.register]`
       * - `POST: /v1/auth/register`
       */
      register<T = any>(
        body?: SRBody,
        config?: SRConfig,
        ...others: any[]
      ): Promise<T>;
      booking: {
        /**
         * **BookingController@new**
         *
         * - `[api.booking.new]`
         * - `POST: /v1/api/bookings`
         */
        new <T = any>(
          body?: SRBody,
          config?: SRConfig,
          ...others: any[]
        ): Promise<T>;
      };
    };
    admin: {
      packages: {
        /**
         * **admin/CarPackageController@new**
         *
         * - `[admin.packages.new]`
         * - `POST: /v1/admin/packages`
         */
        new <T = any>(
          body?: SRBody,
          config?: SRConfig,
          ...others: any[]
        ): Promise<T>;
      };
      features: {
        /**
         * **admin/FeaturesController@new**
         *
         * - `[admin.features.new]`
         * - `POST: /v1/admin/features`
         */
        new <T = any>(
          body?: SRBody,
          config?: SRConfig,
          ...others: any[]
        ): Promise<T>;
      };
    };
  };
  patch: {
    api: {
      booking: {
        /**
         * **BookingController@update**
         *
         * - `[api.booking.update]`
         * - `PATCH: /v1/api/bookings/:bookingUuid`
         */
        update<T = any>(
          params: { bookingUuid: StringOrNumber } | SRParams,
          body?: SRBody,
          config?: SRConfig,
          ...others: any[]
        ): Promise<T>;
      };
    };
    admin: {
      packages: {
        /**
         * **admin/CarPackageController@update**
         *
         * - `[admin.packages.update]`
         * - `PATCH: /v1/admin/packages/:packageUuid`
         */
        update<T = any>(
          params: { packageUuid: StringOrNumber } | SRParams,
          body?: SRBody,
          config?: SRConfig,
          ...others: any[]
        ): Promise<T>;

        /**
         * **admin/CarPackageController@updateFeature**
         *
         * - `[admin.packages.updatefeature]`
         * - `PATCH: /v1/admin/packages/:packageUuid/update-package-feature`
         */
        updatefeature<T = any>(
          params: { packageUuid: StringOrNumber } | SRParams,
          body?: SRBody,
          config?: SRConfig,
          ...others: any[]
        ): Promise<T>;
      };
      features: {
        /**
         * **admin/FeaturesController@update**
         *
         * - `[admin.features.update]`
         * - `PATCH: /v1/admin/features/:featureUuid`
         */
        update<T = any>(
          params: { featureUuid: StringOrNumber } | SRParams,
          body?: SRBody,
          config?: SRConfig,
          ...others: any[]
        ): Promise<T>;
      };
    };
  };
  delete: {
    admin: {
      packages: {
        /**
         * **admin/CarPackageController@delete**
         *
         * - `[admin.packages.delete]`
         * - `DELETE: /v1/admin/packages/:packageUuid`
         */
        delete<T = any>(
          params: { packageUuid: StringOrNumber } | SRParams,
          query?: SRQuery,
          config?: SRConfig,
          ...others: any[]
        ): Promise<T>;
      };
      features: {
        /**
         * **admin/FeaturesController@delete**
         *
         * - `[admin.features.delete]`
         * - `DELETE: /v1/admin/features/:featureUuid`
         */
        delete<T = any>(
          params: { featureUuid: StringOrNumber } | SRParams,
          query?: SRQuery,
          config?: SRConfig,
          ...others: any[]
        ): Promise<T>;
      };
    };
  };
};
export default _default;
