FROM oven/bun:1 as base
# USER bun
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
COPY . /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# RUN mkdir -p /temp/prod
# COPY package.json bun.lockb /temp/prod/
# RUN cd /temp/prod && bun install --frozen-lockfile --production

# FROM base AS prerelease
# COPY --from=install /temp/dev/node_modules node_modules
# COPY . .

# FROM base AS release
# COPY --from=install /temp/prod/node_modules node_modules
# COPY --from=prerelease /usr/src/app/src/index.ts .
# COPY --from=prerelease /usr/src/app/package.json .

# run the app
USER bun
EXPOSE 5000
CMD [ "bun", "run", "dev" ]